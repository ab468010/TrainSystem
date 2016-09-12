using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrainSystem.DataAccessLayer;
using TrainSystem.Models.BusinessEntities;

namespace TrainSystem.Models.BusinessLayer
{
    public class TrainActivityBusinessLayer
    {
        public List<TrainActivity> GetTrainActivitys()
        {
            CallCenterDAL callCenterDal = new CallCenterDAL();
            return callCenterDal.TrainActivitys.ToList();
        }
    }
}