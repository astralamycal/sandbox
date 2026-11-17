<?php

class Category
{
    private ?int $id = null;
    private array $posts = [];

    public function __construct(private string $title, private string $description) {}
    
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function getPosts(): array
    {
        return $this->posts;
    }

    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    public function addPost(Post $post): void
    {
        $test = true;
        foreach ($this->posts as $val){

            if ($post === $val){
                $test = false;
            }
        }
        if ($test === true){
            $this->posts[] = $post;
        }
    }

    public function removePost(Post $post): void
    {
        foreach ($this->posts as $key => $val) {
            if ($val === $post) {
                unset($this->posts[$key]);
                break;
            }
        }
    }

}   

?>