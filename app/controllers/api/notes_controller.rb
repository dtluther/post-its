class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
  end
  
  def show
    @note = Note.find(params[:id])

    if @note
      render "api/notes/show"
    else
      render json: ["Note does not exist."], status: 422
    end
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render "api/notes/show"
    else
      render json: @note.errors.full_messages, status: 422
    end
  end


  def update
    @note = Note.find_by(id: params[:id])
    
    if @note
      @note.update_attributes(note_params)
      render "api/notes/show"
    else
      render json: ["Cannot update note/Note does not exist."], status: 422
    end
  end

  def destroy
    note = Note.find(params[:id])

    if note
      note.destroy
      render note
      render "api/notes/show"
    else
      render json: ["Note does not exist/Note cannot be deleted."], status: 422
    end
  end

  def note_params
    params.require(:note).permit(:title, :color, :body)
  end
end
