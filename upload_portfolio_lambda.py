import boto3
import mimetypes
import zipfile
import os

s3_client = boto3.client('s3')

s3_client.download_file('portfoliobuild.rahulbaisla.com', 'portfoliobuild.zip', 'temp.zip')

with zipfile.ZipFile('temp.zip') as myzip:
    for nm in myzip.namelist():
        s3_client.upload_file(nm, 'portfolio.rahulbaisla.com',nm,ExtraArgs={'ACL': 'public-read','ContentType':mimetypes.guess_type(nm)[0]})

os.remove("temp.zip")
