using AutoMapper;
using AutoMapper.Configuration.Conventions;
using Microsoft.EntityFrameworkCore;
using ShareSquare.Server.Data;
using ShareSquare.Server.Data.Models;
using ShareSquare.Server.Models;
using ShareSquare.Server.Services.Contracts;
using System.Reflection.Metadata.Ecma335;

namespace ShareSquare.Server.Services
{
    public class PostService : IPostService
    {
        private readonly ShareSquareContext data;
        private readonly IMapper _mapper;

        public PostService(ShareSquareContext data, IMapper mapper)
        {
            this.data = data;
            _mapper = mapper;
        }

        public async Task<PostDto> Create(PostDto post)
        {
            if ((await data.Posts.FirstOrDefaultAsync(x => x.Title == post.Title)) != null)
            {
                throw new ArgumentException("A post with the same title already exists.");
            }
            await data.Posts.AddAsync(_mapper.Map<Post>(post));
            await data.SaveChangesAsync();
            return _mapper.Map<PostDto>(await data.Posts.FirstOrDefaultAsync(x => x.Title == post.Title));
        }

        public async Task Delete(int id)
        {
            data.Posts.Remove(data.Posts.FirstOrDefault(x => x.Id == id));
            await data.SaveChangesAsync();
        }

        public async Task<IEnumerable<PostDto>> GetAll()
        {
            return _mapper.Map<PostDto[]>(await data.Posts.ToListAsync());
        }

        public async Task<PostDto> GetById(int id)
        {
            return _mapper.Map<PostDto>(await data.Posts.FirstOrDefaultAsync(x => x.Id == id));
        }

        public async Task<PostDto> Update(PostDto post)
        {
            var record = await data.Posts.FirstOrDefaultAsync(x => x.Id == post.Id);
            if (record == null)
            {
                throw new ArgumentNullException("Record with this ID does not exists.");
            }
            _mapper.Map(post, record);
            await data.SaveChangesAsync();
            return _mapper.Map<PostDto>(record);
        }
    }
}
