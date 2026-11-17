<?php

class ProductCategoryManager extends AbstractManager
{
    public function findAll() : array
    {
        $query = $this->db->prepare('SELECT * FROM product_categories;');
        $query->execute();

        $results = $query->fetchAll(PDO::FETCH_ASSOC);
        $productCats = [];

        foreach ($results as $result)
        {
            $category = new ProductCategory($result['name'], $result['description'], $result['id']);
            $productCats[] = $category;
        }

        return $productCats;
    }

    public function findById(int $id) : ? ProductCategory
    {
        $query = $this->db->prepare('SELECT * FROM product_categories WHERE id = :id;');
        $parameters = ['id' => $id];
        $query->execute($parameters);

        $result = $query->fetch(PDO::FETCH_ASSOC);

        if ($result)
        {
            return new ProductCategory($result['name'], $result['description'], $result['id']);
        }

        else{
            return null;
        }

    }
}