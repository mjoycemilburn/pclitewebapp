# pclitewebapp - Viewer for the Milburn Parish Council website

To run the webapp when testing anything that doesn't require file access, set the TESTING flag in App.js to true, start a terminal session for pclitewebapp and then enter npm start.

For full testing you need to rebuild and deploy the webapp. To do this, open the build_for_production.ps1 file, select all, check you're running a terminal session for pclitewebapp and then press F8.

There's a RESTOREREQUIRED flag in App.js too. This was used during initial development to reset the database from the internal test data set. Once the system goes live, this should be removed altogether. It's normally set to false anyway, but it would be better if it weren't possible to rest to true and inadvertently wipe the production d/b.

If you're interested in using this code to generate a website for your own Parish Council, you're very welcome to take a copy. You'll find the code for the associated database-maintenance webapp at https://github.com/mjoycemilburn/pclitemanager.


