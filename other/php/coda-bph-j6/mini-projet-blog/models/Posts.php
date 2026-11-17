<?php

class Post
{
    private ?int $id = null;
    private array $categories = [];

    public function __construct(private string $title, private string $excerpt, private string $content, private User $author, private DateTime $created_at) {}
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getExcerpt(): string
    {
        return $this->excerpt;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function getAuthor(): User
    {
        return $this->author;
    }

    public function getCreatedAt(): DateTime
    {
        return $this->created_at;
    }

    public function getCategories(): array
    {
        return $this->categories;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function setExcerpt(string $excerpt): void
    {
        $this->excerpt = $excerpt;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function setAuthor(User $author): void
    {
        $this->author = $author;
    }

    public function setCreatedAt(DateTime $created_at): void
    {
        $this->created_at = $created_at;
    }

    public function addCategory(Category $category): void
    {
        $test = true;
        foreach ($this->categories as $val){

            if ($val === $categories){
                $test = false;
            }
        }
        if ($test === true){
            $this->categories[] = $category;
        }
    }

    public function removeCategory(Category $category): void
    {
        foreach ($this->categories as $key => $val) {
            if ($val === $category) {
                unset($this->categories[$key]);
                break;
            }
        }
    }
}   

?>