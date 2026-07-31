import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Unhandled error in", this.props.name ?? "app", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>

        <p className="text-slate-400 mb-6">
          This section failed to load. Please reload the page.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition"
        >
          Reload
        </button>
      </section>
    );
  }
}

export default ErrorBoundary;
