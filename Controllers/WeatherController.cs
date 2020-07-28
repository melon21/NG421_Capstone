using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WeatherController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Weather> Get()
        {
            Weather[] weather = null;
            using (var context = new ApplicationDbContext())
            {
                weather = context.Weather.ToArray();
            }
            return weather;

        }
        [HttpPost]
        public Weather Post([FromBody]Weather weather)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Weather.Add(weather);
                context.SaveChanges();
            }
            return weather;
        }
    }
}
