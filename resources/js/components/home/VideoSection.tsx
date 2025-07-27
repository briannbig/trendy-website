const VideoSection = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-6 ">Experience Trendy Vocational</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe
            className="w-full h-[500px] rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/bUe-3jXQuzM"
            title="Trendy Vocational Training Centre"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
