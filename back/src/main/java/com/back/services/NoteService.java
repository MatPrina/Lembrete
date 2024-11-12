package com.back.services;

import com.back.entities.Note;
import com.back.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    private NoteRepository rep;

    public List<Note> getAllNotes(Long userID) throws Exception{
        Optional<List<Note>> optionalAllNotes = rep.findAllNotesByUserID(userID);
        if(optionalAllNotes.isPresent()) {
            List<Note> allNotes = optionalAllNotes.get();
            return allNotes;
        } else {
            throw new Exception("Lembretes não encontrados...");
        }
    }

    public Note getNote(Long userID, Long noteID) throws Exception{
        Optional<Note> optionalNote = rep.findNoteByUserIDAndId(userID, noteID);
        if(optionalNote.isPresent()) {
            Note note = optionalNote.get();
            return note;
        } else {
            throw new Exception("Lembrete não encontrado...");
        }
    }

    public Note postNote(Note note) {
        rep.save(note);
        return note;
    }

    public Note updateNote(Long noteID, Note note) throws Exception{
        Optional<Note> optionalNote = rep.findById(noteID);
        if(optionalNote.isPresent()) {
            Note oldNote = optionalNote.get();
            oldNote.setText(note.getText());
            oldNote.setTitle(note.getTitle());

            rep.save(oldNote);
            return oldNote;
        } else {
            throw new Exception("Lembrete não encontrado...");
        }
    }

    public Note deleteNote(Long noteID) throws Exception{
        Optional<Note> optionalNote = rep.findById(noteID);
        if(optionalNote.isPresent()) {
            Note note = optionalNote.get();
            rep.delete(note);
            return note;
        } else {
            throw new Exception("Lembrete não encontrado...");
        }
    }
}
