# Build script for PClite Webapp app
#
# Start a terminal session for pclitewebapp, highlight the content of 
# this script and press f8. 
#
# The script copies the latest build to the root of a composite folder and
# adds the content of the pclitemanager build folder to composte/manager.
# The composite  folder  is then deployed by firebase

# The application is designed to operate from the Firebase Milburn PC Webapp project.
# This is a free Blaze project which should cover reqts more than adequately. It runs
# under the https://mpclite.web.app/ and https://mpclite.web.app/manager urls until
# we buy it a google milburnpc.com url or transfer the existing url. 
# 
# 1. create new clerk address clerk.MilburnPC@gmail.com, tell people to use this
#    in future and and set forwarding to Joan's address
# 2. add any new entries
# 3. transfer existing url (change website for Google business in the interim)

npm run build
ROBOCOPY build ./composite /E
ROBOCOPY ../pclitemanager/build ./composite/manager /E
firebase deploy --only hosting