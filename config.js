let appInsights = require('applicationinsights');
if(process.env.APPINSIGHTS_INSTRUMENTATIONKEY){
  appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY);
  appInsights.start();
}
module.exports =  {
  key : process.env.APPINSIGHTS_INSTRUMENTATIONKEY
}