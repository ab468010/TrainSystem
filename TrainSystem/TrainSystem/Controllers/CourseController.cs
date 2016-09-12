using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TrainSystem.Models.BusinessLayer;
using TrainSystem.ViewModel;

namespace TrainSystem.Controllers
{
    public class CourseController : Controller
    {

        const string MODELNAME = "产品培训";
        //
        // GET: /Course/
        public ActionResult BasicTrain()
        {
            Path path = new Path();
            BasicCourseModel basicCourseViewModel = new BasicCourseModel();
            TrainActivityBusinessLayer trainActivityBal = new TrainActivityBusinessLayer();
            basicCourseViewModel.CourseList = trainActivityBal.GetTrainActivitys();
            basicCourseViewModel.Path = "1";
            return View(basicCourseViewModel);
            return View();
        }

        public ActionResult AdvancedTrain()
        {
            Path path = new Path();
            return View();

        }

        public ActionResult ApplicationTrain()
        {
            Path path = new Path();

            return View();

        }

        public ActionResult CourseProfile(int id)
        {
            Path path = new Path();

            return View();


        }
    }
}