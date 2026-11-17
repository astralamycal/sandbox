<?php

class ProductCategoryController extends AbstractController
{
    public function list() : void
    {
        $manager = new ProductCategoryManager();

        $productCats = $manager->findAll();
        $arrayProductsCat= [];

        foreach($productCats as $productCat)
        {
            $arrayProductCat[] = $productCat->toArray();
        }

        $this->render([
            "code" => 200,
            "product-categories" => $arrayProductCat
        ]);
    }

    public function details(int $id) : void
    {
        $manager = new ProductCategoryManager();

        $productCat = $manager->findById($id);

        $this->render([
            "code" => 200,
            "product-categories" => $productCat->toArray()
        ]);
    }
}