package com.example.server.repository;

import com.example.server.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepo extends JpaRepository<Resume,Integer> {
}
