package com.diyan.exports.config;

import com.diyan.exports.model.CompanyInfo;
import com.diyan.exports.model.Product;
import com.diyan.exports.model.Category;
import com.diyan.exports.repositories.CategoryRepository;
import com.diyan.exports.repositories.CompanyInfoRepository;
import com.diyan.exports.repositories.ProductRepository;
import org.springframework.boot.CommandLineRunner;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

// will not be considered without @Component
public class DatabaseSeeder implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;
    private final CompanyInfoRepository companyInfoRepository;
    public DatabaseSeeder(CategoryRepository categoryRepository,
                          ProductRepository productRepository,
                          CompanyInfoRepository companyInfoRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.companyInfoRepository = companyInfoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (categoryRepository.count() == 0) {
            seedData();
        }
    }

    private void seedData() {
        // 1. Seed Categories
        Category spices = new Category();
        spices.setName("Spices");
        spices.setSlug("spices");
        spices.setUrl("images/spices.png");
        categoryRepository.save(spices);
        Category oilSeeds = new Category();
        oilSeeds.setName("Oil Seeds");
        oilSeeds.setSlug("oil-seeds");
        oilSeeds.setUrl("images/oilseeds.png");
        categoryRepository.save(oilSeeds);
        // 2. Seed Products
        // Example 1: Cumin Seeds (Spices category)
        Product cumin = new Product();
        cumin.setCategory(spices);
        cumin.setName("Cumin Seeds");
        cumin.setSlug("cumin-seeds");
        cumin.setDescription("Cumin seeds are the seeds of cuminum cyminum, which belongs to the parsley family...");
        cumin.setBotanicalName("Cuminum cyminum L.");
        cumin.setFamilyName("Apiaceae");
        cumin.setCommercialPart("Fruit");
        cumin.setOriginAndDistribution("Indigenous to Northern Egypt, Syria, Mediterranean, Iran, India.");
        cumin.setUses("Used as a condiment, ingredient in curry powders, medicine.");
        cumin.setImageUrl("images/cumin.jpg");

        Map<String, String> cuminSpecs = new HashMap<>();
        cuminSpecs.put("Purity", "99% Min");
        cuminSpecs.put("Admixture", "1% Max");
        cuminSpecs.put("Moisture", "9% Max");
        cumin.setSpecifications(cuminSpecs);
        productRepository.save(cumin);
        // Example 2: Sesame Seeds (Oil Seeds category)
        Product sesame = new Product();
        sesame.setCategory(oilSeeds);
        sesame.setName("Sesame Seeds");
        sesame.setSlug("sesame-seeds");
        sesame.setDescription("Mechanically hulled and mechanically dried sesame seed...");
        sesame.setImageUrl("images/sesame.jpg");

        Map<String, String> sesameSpecs = new HashMap<>();
        sesameSpecs.put("Purity", "99.98% Min");
        sesameSpecs.put("Salmonella", "Absent in 25 grams");
        sesameSpecs.put("Yeast & Moulds", "< 10,000 CFU/gram");
        sesameSpecs.put("TPC", "< 100,000 CFU/gram");
        sesameSpecs.put("FFA", "< 2%");
        sesame.setSpecifications(sesameSpecs);
        productRepository.save(sesame);
        // 3. Seed Company Info
        CompanyInfo info = new CompanyInfo();
        info.setRegisteredOfficeAddress("Poojan complex, G-9, Modhera Rd, Mehsana, Gujarat, India.");
        info.setHeadOfficeAddress("Poojan complex, G-9, Modhera Rd, Mehsana, Gujarat, India.");
        info.setContactNumbers(Arrays.asList("+91 9904061671", "+91 7016174814"));
        info.setEmails(Arrays.asList("inquiry@diyanexports.com"));
        info.setWebsite("www.diyanexports.com");
        companyInfoRepository.save(info);

        System.out.println(">>> Database Seeded successfully with Categories and Products!");
    }
}
