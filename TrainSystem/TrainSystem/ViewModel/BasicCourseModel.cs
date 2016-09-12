using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrainSystem.Models.BusinessEntities;

namespace TrainSystem.ViewModel
{
    public class BasicCourseModel : CourseModel
    {
        public List<TrainActivity> CourseList { get; set; }
        public string Path { get; set; }

    }
}