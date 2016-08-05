using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ThermoTrainSystem_Test.DataAccessLayer;
using ThermoTrainSystem_Test.Models.BusinessEntities;

namespace ThermoTrainSystem_Test.Models.BusinessLayer
{
    public class NewsBusinessLayer
    {
        public List<News> GetNewsList()
        {
            List<News> newsList = new List<News>();

            CallCenterDAL callCenterDal = new CallCenterDAL();

            return callCenterDal.NewsArray.ToList();
        }

        public News SaveNews(News news)
        {
            CallCenterDAL callCenterDal = new CallCenterDAL();
            callCenterDal.NewsArray.Add(news);
            callCenterDal.SaveChanges();
            return news;
        }
    }
}