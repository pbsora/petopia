using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.DTOs.Categories;
using server.Model;
using server.Repositories.CategoryRepo;

namespace server.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repository;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoriesAsync()
        {
            var categories = await _repository.GetCategories();

            if (categories.Count() == 0)
                return NotFound("No categories found");

            return Ok(categories);
        }

        [HttpGet("{id:int}", Name = "GetCategoryByIdAsync")]
        public async Task<ActionResult<string>> GetCategoryByIdAsync(int id)
        {
            var category = await _repository.GetCategoryById(id);

            if (category == null)
                return NotFound("Category not found");

            return Ok(category);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] NewCategoryDTO category)
        {
            if (category.Name == null)
                return BadRequest("Category name is required");

            var newCategory = _mapper.Map<Category>(category);

            var createdCategory = await _repository.CreateCategory(newCategory);

            return CreatedAtRoute(
                nameof(GetCategoryByIdAsync),
                new { id = createdCategory.CategoryId },
                createdCategory
            );
        }

        [HttpPut("{id:int}")]
        public IActionResult PutAsync(int id, [FromBody] Category category)
        {
            if (id != category.CategoryId)
                return BadRequest("Id's don't match");

            _repository.UpdateCategory(category);

            return Ok(category);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var categoryToDelete = await _repository.GetCategoryById(id);

            if (categoryToDelete == null)
                return NotFound("Category not found");

            _repository.DeleteCategory(categoryToDelete);

            return Ok(categoryToDelete);
        }
    }
}
