﻿namespace ShareSquare.Server
{
    public class JwtSettings
    {
        public string ValidIssuer { get; set; }
        public string ValidAudience { get; set; }
        public string IssuerSigningKey { get; set; }
    }
}
