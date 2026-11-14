export default function VideoPlayer({ course, onClose }) {
  if (!course) return null
  return <div className="modal-backdrop" onClick={onClose}>
    <div className="video-modal" onClick={e => e.stopPropagation()}>
      <button className="close" onClick={onClose}>×</button>
      <div className="video-placeholder">
        <span>▶</span><p>Aula: {course.title}</p>
        <small>Área demonstrativa do player de vídeo</small>
      </div>
      <h2>{course.title}</h2>
      <p>O conteúdo da aula poderá ser inserido aqui.</p>
    </div>
  </div>
}
