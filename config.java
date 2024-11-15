package com.lab2.pcs;

import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class config implements WebMvcConfigurer{
public void addCorsMappings(CorsRegistry reg) {
	reg.addMapping("/pcs").allowedOrigins("http://localhost:5173").allowedMethods("GET","PUT","POST","DELETE").allowedHeaders("*").allowCredentials(true);
}
}
