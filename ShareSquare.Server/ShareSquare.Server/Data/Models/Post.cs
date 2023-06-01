namespace ShareSquare.Server.Data.Models
{
    public class Post : BaseEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
    }
}
