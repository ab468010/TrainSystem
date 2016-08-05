using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ThermoTrainSystem_Test.Models;
using ThermoTrainSystem_Test.DataAccessLayer;
using ThermoTrainSystem_Test.Models.BusinessEntities;
using ThermoTrainSystem_Test.ViewModels;
using ThermoTrainSystem_Test.Models.BusinessLayer;

namespace ThermoTrainSystem_Test.Controllers
{
    public class NewsController : Controller
    {
        public ActionResult Add()
        {
            return View("CreateNews");
        }

        public ActionResult SaveNews(News news)
        {
            NewsBusinessLayer newsBusinessLayer = new NewsBusinessLayer();
            if (ModelState.IsValid)
            {
                newsBusinessLayer.SaveNews(news);
                return RedirectToAction("Index");
            }
            else
            {
                return View("CreateNews");
            }
            return View("Index");
        }

        public ActionResult Index()
        {
            NewsListViewModel newsListViewModel = new NewsListViewModel();

            NewsBusinessLayer newsBusinessLayer = new NewsBusinessLayer();

            List<News> newsList = newsBusinessLayer.GetNewsList();

            List<NewsViewModel> newsViewModelList = new List<NewsViewModel>();

            foreach (News news in newsList)
            {
                NewsViewModel newsViewModel = new NewsViewModel();

                newsViewModel.NewsId = news.NewsId;
                newsViewModel.Name = news.Name;
                newsViewModel.Description = news.Description;

                newsViewModelList.Add(newsViewModel);
            }
            newsListViewModel.NewsArray = newsViewModelList;

            return View("Index", newsListViewModel);
        }
	}
}