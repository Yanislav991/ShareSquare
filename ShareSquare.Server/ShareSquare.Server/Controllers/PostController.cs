using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ShareSquare.Server.Models;
using ShareSquare.Server.Services.Contracts;

namespace ShareSquare.Server.Controllers
{
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<PostDto>>> Get()
        {
            try
            {
                return Ok(await _postService.GetAll());
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, new { Message = "Something went wrong!" });
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<PostDto>> GetById(int id)
        {
            try
            {
                var result = await _postService.GetById(id);
                if (result == null) return NotFound();
                return Ok(result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, new { Message = "Something went wrong!" });
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<PostDto>> Create(PostDto playlist)
        {
            try
            {
                var newRecord = await _postService.Create(playlist);
                return Created("", newRecord);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = ex.Message });
            }
        }

        [HttpPut("/update")]
        public async Task<ActionResult<IEnumerable<PostDto>>> Update(PostDto playlist)
        {
            try
            {
                var newRecord = await _postService.Update(playlist);
                return Ok(newRecord);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, new { Message = "Something went wrong!" });
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await _postService.Delete(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, new { Message = "Record with this Id does not exists." });
            }
        }
    }
}
