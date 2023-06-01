using ShareSquare.Server.Data;
using ShareSquare.Server.Profiles;
using ShareSquare.Server.Services;
using ShareSquare.Server.Services.Contracts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(PostProfile));
builder.Services.AddTransient<IPostService, PostService>();
builder.Services.AddEntityFrameworkSqlite().AddDbContext<ShareSquareContext>();

using (var client = new ShareSquareContext())
{
    client.Database.EnsureCreated();
}

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
