package com.lab2.pcs;
import com.lab2.pcs.rep;
import com.lab2.pcs.pc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class ser {
	@Autowired
    private rep r;
	public List<pc> getAllpc(){
		return r.findAll();
	}
	public pc getPcbyid(String sid){
		return r.findById(sid).orElse(null);
	}
	public pc addpc(pc p) {
		return r.save(p);
		
	}
	public pc updatepc(String sid,pc p) {
		p.setSid(sid);
		return r.save(p);
	}
	public void deletepc(String sid){
	 r.deleteById(sid);
	}
	public void deletepcs(){
		 r.deleteAll();
		}
}
