using AutoMapper;
using ShareSquare.Server.Data.Models;
using ShareSquare.Server.Models;

namespace ShareSquare.Server.Profiles
{
    public class PostProfile : Profile
    {
        public PostProfile()
        {
            CreateMap<Post, PostDto>().ReverseMap();
        }
    }
}
