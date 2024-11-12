package com.back.repositories;

import com.back.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

    public Optional<Note> findNoteByUserIDAndId(Long userID, Long id);

    public Optional<List<Note>> findAllNotesByUserID(Long userID);
}
