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
            return View(new BasicCourseModel
            {
                ModelName = MODELNAME,
                Path = path
            });
        }
	}
}