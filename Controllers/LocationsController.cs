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
   // [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Locations> Get()
        {
            Locations[] locations = null;
            using (var context = new ApplicationDbContext())
            {
                locations = context.Locations.ToArray();
            }
            return locations;

        }
        [HttpPost]
        public Locations Post([FromBody]Locations locations)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Locations.Add(locations);
                context.SaveChanges();
            }
            return locations;
        }
    }
}
