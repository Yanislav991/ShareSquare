using ShareSquare.Server.Data.Models;
using ShareSquare.Server.Models;

namespace ShareSquare.Server.Services.Contracts
{
    public interface IPostService
    {
        Task<PostDto> GetById(int id);
        Task<IEnumerable<PostDto>> GetAll();
        Task<PostDto> Create(PostDto playlistDTO);
        Task<PostDto> Update(PostDto playlistDTO);
        Task Delete(int id);
    }
}
