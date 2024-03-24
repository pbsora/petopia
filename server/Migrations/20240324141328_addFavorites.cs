using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class addFavorites : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0318ad55-8764-4cb0-9050-54f1cfffb913");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0de4923b-11ab-46d0-bcaf-1870eb1d6097");

            migrationBuilder.CreateTable(
                name: "Favorites",
                columns: table => new
                {
                    FavoriteId = table.Column<Guid>(type: "uuid", nullable: false),
                    ProductId = table.Column<Guid>(type: "uuid", nullable: false),
                    UserId = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favorites", x => x.FavoriteId);
                    table.ForeignKey(
                        name: "FK_Favorites_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Favorites_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductsId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "04b4dd55-2d01-49b3-984b-9c30ecc0ae15", null, "User", "USER" },
                    { "a807719f-2316-4987-8b8f-4f5e0ddbcfd7", null, "Admin", "ADMIN" }
                });

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 1,
                column: "Name",
                value: "Dogs");

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 2,
                column: "Name",
                value: "Cats");

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 4,
                column: "Name",
                value: "Birds");

            migrationBuilder.CreateIndex(
                name: "IX_Favorites_ProductId",
                table: "Favorites",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Favorites_UserId",
                table: "Favorites",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favorites");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "04b4dd55-2d01-49b3-984b-9c30ecc0ae15");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a807719f-2316-4987-8b8f-4f5e0ddbcfd7");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0318ad55-8764-4cb0-9050-54f1cfffb913", null, "Admin", "ADMIN" },
                    { "0de4923b-11ab-46d0-bcaf-1870eb1d6097", null, "User", "USER" }
                });

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 1,
                column: "Name",
                value: "Dog");

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 2,
                column: "Name",
                value: "Cat");

            migrationBuilder.UpdateData(
                table: "PetTypes",
                keyColumn: "PetTypeId",
                keyValue: 4,
                column: "Name",
                value: "Bird");
        }
    }
}
