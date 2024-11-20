package com.lab2.pcs;
import com.lab2.pcs.pc;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface rep extends MongoRepository<pc,String> {

	}

