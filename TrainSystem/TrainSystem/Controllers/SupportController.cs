using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrainSystem.ViewModel;

namespace TrainSystem.Controllers
{
    public class SupportController : Controller
    {
        const string MODELNAME = "在线支持";
        //
        // GET: /Support/
        public ActionResult TrainSteps()
        {
            Path path = new Path();
            path.pathArgs = new string[] { "首页", MODELNAME, "培训报名流程" };
            return View();
        }

        public ActionResult TrainAttentions()
        {
            Path path = new Path();
            path.pathArgs = new string[] { "首页", MODELNAME, "培训注意事项" };
            return View();
        }

        public ActionResult TrainSchedule()
        {
            Path path = new Path();
            path.pathArgs = new string[] { "首页", MODELNAME, "培训大课表" };
            return View();
        }

        public ActionResult Credentials()
        {
            Path path = new Path();
            path.pathArgs = new string[] { "首页", MODELNAME, "证书查询" };
            return View();
        }

        public ActionResult TrainIntention()
        {
            Path path = new Path();
            path.pathArgs = new string[] { "首页", MODELNAME, "培训DIY" };
            return View();
        }
	}
}