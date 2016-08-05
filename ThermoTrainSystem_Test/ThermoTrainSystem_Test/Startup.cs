using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ThermoTrainSystem_Test.Startup))]
namespace ThermoTrainSystem_Test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
