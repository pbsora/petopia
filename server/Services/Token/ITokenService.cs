using server.Model;

namespace server.Services.Token
{
    public interface ITokenService
    {
        string CreateToken(ApplicationUser user);
    }
}
