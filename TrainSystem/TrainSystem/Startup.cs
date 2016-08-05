using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TrainSystem.Startup))]
namespace TrainSystem
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
