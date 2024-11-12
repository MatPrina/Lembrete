package com.back.controller;

import com.back.entities.Note;
import com.back.services.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteService service;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/note")
    public ResponseEntity<Note> registerNote(@RequestBody Note note) {
        Note newNote = service.postNote(note);
        return ResponseEntity.ok(newNote);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/note/{userID}")
    public ResponseEntity<List<Note>> catchAllNotes(@PathVariable Long userID) throws Exception{
        List<Note> allNotes = service.getAllNotes(userID);
        return ResponseEntity.ok(allNotes);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/note/{userID}/{noteID}")
    public ResponseEntity<Note> catchOneNote(@PathVariable Long userID, @PathVariable Long noteID) throws Exception{
        Note caughtNote = service.getNote(userID, noteID);
        return ResponseEntity.ok(caughtNote);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/note/{noteID}")
    public ResponseEntity<Note> changeNote(@PathVariable Long noteID, @RequestBody Note note) throws Exception{
        Note changedNote = service.updateNote(noteID, note);
        return ResponseEntity.ok(changedNote);
    }
}
