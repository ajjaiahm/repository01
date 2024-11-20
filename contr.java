package com.lab2.pcs;
import com.lab2.pcs.pc;
import com.lab2.pcs.ser;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/pcs")
public class contr {
	@Autowired
	private ser pser;
	@GetMapping
	public List<pc>getAllpc(){
		return pser.getAllpc();
	}
	@GetMapping("/{sid}")
	public pc getPcbyid(@PathVariable String sid){
		return pser.getPcbyid(sid);
	}
	@PostMapping("")
	public pc addpc(@RequestBody pc p){
		return pser.addpc(p);
	}
	@PutMapping("/{sid}")
	public pc updatepc(@PathVariable String sid,@RequestBody pc p){
		return pser.updatepc(sid,p);
	}
	@DeleteMapping("/{sid}")
	public void deletepc(@PathVariable String sid){
		 pser.deletepc(sid);}
	@DeleteMapping
	public void deletepcs(){
		pser.deletepcs();
	}

}
