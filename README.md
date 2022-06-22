# pclitewebapp

Database maintenance utility for the Milburn Parish Council website

If you want to test anything that doesn't require file or database work set the TESTING flag in App.js to true, start a terminal session for pclitewebapp and then enter npm start.

For full testing you need to rebuild and deploy the webapp. To do this, open the build_for_production.ps1 file, select all, check you're running a terminal session for pclitewebapp and then press F8.

There's a RESTOREREQUIRED flag in App.js too. This was used during initial development to reset the database from the internal test data set. Once the system goes live, this should be removed altogether. It's normally set to false anyway, but it would be better if it weren't possible to rest to true and inadvertently wipe the production d/b.

Note, we're now deploying to the mpclite project and running as mpclite.web.app. We might attach a better url to this when the system goes live.
