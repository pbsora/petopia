using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class addPetTypeToProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "42099a87-4769-4c0a-b0af-d6d3c8d1c6a3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7faf4e78-dbc6-4bcc-82a7-c8657e8ceeae");

            migrationBuilder.AddColumn<int>(
                name: "PetId",
                table: "Products",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "16c91a07-666a-4fe7-8ad2-2255aa601b9e", null, "Admin", "ADMIN" },
                    { "1945643d-feb0-452e-a95c-bfddfcee9a08", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "16c91a07-666a-4fe7-8ad2-2255aa601b9e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1945643d-feb0-452e-a95c-bfddfcee9a08");

            migrationBuilder.DropColumn(
                name: "PetId",
                table: "Products");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "42099a87-4769-4c0a-b0af-d6d3c8d1c6a3", null, "User", "USER" },
                    { "7faf4e78-dbc6-4bcc-82a7-c8657e8ceeae", null, "Admin", "ADMIN" }
                });
        }
    }
}
