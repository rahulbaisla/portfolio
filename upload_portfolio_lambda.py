import boto3
from botocore.client import Config
import io
import mimetypes
import zipfile

def lambda_handler(event, context):

    # Define s3 resources
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

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

    return 'Hello from Lambda'
