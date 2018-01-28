export const fetchNotes = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/notes'
    });
};

export const fetchNote = id => {
    return $.ajax({
        method: 'GET',
        url: `api/notes/${id}`
    });
};

export const createNote = note => {
    return $.ajax({
        method: 'POST',
        url: `api/notes`,
        data: note
    });
};

export const update = note => {
    return $.ajax({
        method: 'POST',
        url: `api/notes/${note.id}`,
        data: { note }
    });
};

export const destroy = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${id}`
    });
};