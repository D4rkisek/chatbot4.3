import pygame
import random

# Initialize pygame
pygame.init()
screen_width, screen_height = 400, 280
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('Car Dodging Game')
clock = pygame.time.Clock()

# Load images
background_img = pygame.transform.scale(pygame.image.load("static/cargame_background.png"), (screen_width, screen_height))
car_imgs = [pygame.transform.scale(pygame.image.load(f"static/car{i}.png"), (25, 45)) for i in range(1, 12)]
car_img = pygame.transform.scale(pygame.image.load("static/car.png"), (60, 75))

# Car variables
car_width, car_height = car_img.get_width(), car_img.get_height()
car_speed = 8
left_boundary = 30
right_boundary = screen_width - 30
max_car_width = right_boundary

# Hitbox offsets
car_hitbox_offset_x = 10
car_hitbox_offset_y = 10

# Tree variables
trees = []
tree_speed = 3
tree_spawn_delay = 60
tree_spawn_timer = 0

# Font for game over message and questions
font = pygame.font.Font(None, 36)
last_answer = ''

insurance_questions = [
    ("What does comprehensive insurance cover?", 
     "A) Vandalism B) Tire wear C) Oil changes", 
     "A"),
    ("What factor can affect your car insurance premium?", 
     "A) Car color B) Age & driving record C) Steering wheel material", 
     "B"),
    ("What typically increases the cost of car insurance premiums?", 
     "A) Parking Indoors B) Having a dashboard camera C) Adding another driver to the policy", 
     "C"),
    ("What is not typically covered by car insurance?", 
     "A) Theft B) Engine failure due to lack of maintenance C) Accidents", 
     "B")
]

def show_game_over():
    global last_answer
    # Select a random question and answer
    question, options, correct_answer = random.choice(insurance_questions)
    
    screen.fill((0, 0, 0))  # Clear the screen with a black background
    font_small = pygame.font.Font(None, 15)  # Use a smaller font size for the game over screen
    game_over_text = font_small.render("Game Over!", True, (255, 0, 0))
    question_text = font_small.render("Answer this insurance question to continue:", True, (255, 255, 255))
    question_rendered = font_small.render(question, True, (255, 255, 255))
    options_rendered = font_small.render(options, True, (255, 255, 255))
    instruction = font_small.render("Press the correct option key (A, B, or C)", True, (255, 255, 255))
    
    # Adjust the positioning of the text to fit the smaller screen
    screen.blit(game_over_text, (screen_width // 2 - game_over_text.get_width() // 2, 20))
    screen.blit(question_text, (screen_width // 2 - question_text.get_width() // 2, 50))
    screen.blit(question_rendered, (screen_width // 2 - question_rendered.get_width() // 2, 70))
    screen.blit(options_rendered, (screen_width // 2 - options_rendered.get_width() // 2, 90))
    screen.blit(instruction, (screen_width // 2 - instruction.get_width() // 2, 110))
    pygame.display.flip()
    
    waiting_for_answer = True
    while waiting_for_answer:
        for event in pygame.event.get():
            if event.type == pygame.KEYDOWN:  # This line was corrected
                if event.key == pygame.K_a and correct_answer == 'A':
                    waiting_for_answer = False
                elif event.key == pygame.K_b and correct_answer == 'B':
                    waiting_for_answer = False
                elif event.key == pygame.K_c and correct_answer == 'C':
                    waiting_for_answer = False

    if not waiting_for_answer:
        restart_game()

def restart_game():
    global trees, game_over, car_x, car_y, tree_spawn_timer
    trees.clear()
    game_over = False
    car_x = screen_width // 2 - car_width // 2
    car_y = screen_height - car_height - 20
    tree_spawn_timer = 0

# Initial car position
car_x = screen_width // 2 - car_width // 2
car_y = screen_height - car_height - 20

# Game loop
running = True
game_over = False
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    if not game_over:
        # User input
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and car_x > left_boundary:
            car_x -= car_speed
        if keys[pygame.K_RIGHT] and car_x < max_car_width - car_width:
            car_x += car_speed

        # Tree spawning
        tree_spawn_timer += 1
        if tree_spawn_timer >= tree_spawn_delay:
            tree_x = random.randint(left_boundary, right_boundary - car_width)
            tree_y = -car_height
            tree_img = random.choice(car_imgs)
            trees.append((tree_x, tree_y, tree_img))
            tree_spawn_timer = 0  # Reset spawn timer after spawning a tree

        # Move trees
        trees = [(tree_x, tree_y + tree_speed, tree_img) for tree_x, tree_y, tree_img in trees if tree_y < screen_height]

        # Check for collision with car
        for tree_x, tree_y, tree_img in trees:
            if (car_x + car_hitbox_offset_x < tree_x + tree_img.get_width() - car_hitbox_offset_x) and \
               (car_x + car_width - car_hitbox_offset_x > tree_x + car_hitbox_offset_x) and \
               (car_y + car_hitbox_offset_y < tree_y + tree_img.get_height() - car_hitbox_offset_y) and \
               (car_y + car_height - car_hitbox_offset_y > tree_y + car_hitbox_offset_y):
                game_over = True
                break

    # Rendering
    screen.blit(background_img, (0, 0))
    screen.blit(car_img, (car_x, car_y))
    for tree_x, tree_y, tree_img in trees:
        screen.blit(tree_img, (tree_x, tree_y))

    if game_over:
        show_game_over()

    pygame.display.flip()
    clock.tick(60)

pygame.quit()