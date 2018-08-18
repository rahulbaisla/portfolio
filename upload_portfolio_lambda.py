import boto3
from botocore.client import Config
import io
import mimetypes
import zipfile

def lambda_handler(event, context):

    # Define s3 resources
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:ap-southeast-2:998481987873:deployPortfolioTopic')

    location = { "bucketName": 'portfoliobuild.rahulbaisla.com',
                 "objectKey": 'portfoliobuild.zip'
               }

    try:
        job = event.get("CodePipeline.job")

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]

        print("Building portfolio from " + str(location))

        # Define Buckets
        portfolio_bucket = s3.Bucket("portfolio.rahulbaisla.com")
        build_bucket = s3.Bucket("portfoliobuild.rahulbaisla.com")

        # Download the artefacts from s3 Bucket to inmemory
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        # Iterate through files in Zip and upload to portforlio bucket
        with zipfile.ZipFile(portfolio_zip) as myzip:
            for name in myzip.namelist():
                obj = myzip.open(name)
                portfolio_bucket.upload_fileobj(obj, name, ExtraArgs={'ACL':'public-read','ContentType':mimetypes.guess_type(name)[0]})

        print('job done !!')
        topic.publish(Subject="Portfolio Deployed", Message="Portfolio deployed Successfully.")

        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job['id'])
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="Portfolio deployment  Failed.")
        raise

    return 'Hello from Lambda'
