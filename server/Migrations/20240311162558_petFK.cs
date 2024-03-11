using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class petFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0f239e7f-9c74-4736-a29c-a930280f0502");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a806f70a-6a97-49ca-975e-ae2afd0b0e3d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2a1c9938-2734-4c1d-902b-50665ee7c7bf", null, "Admin", "ADMIN" },
                    { "f92265fe-7293-45ba-805d-e0b00c9da99b", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2a1c9938-2734-4c1d-902b-50665ee7c7bf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f92265fe-7293-45ba-805d-e0b00c9da99b");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0f239e7f-9c74-4736-a29c-a930280f0502", null, "User", "USER" },
                    { "a806f70a-6a97-49ca-975e-ae2afd0b0e3d", null, "Admin", "ADMIN" }
                });
        }
    }
}
