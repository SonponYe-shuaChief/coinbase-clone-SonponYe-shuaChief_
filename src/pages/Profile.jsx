import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

function Profile() {
  const { user } = useAuth();

  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 py-10 lg:px-8">
      <div className="max-w-2xl">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Home
        </Link>

        <div className="mt-8">
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950">
            Your Profile
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Account information and settings
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <p className="mt-2 text-lg text-slate-900">
                {user?.name || "Not provided"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <p className="mt-2 text-lg text-slate-900">
                {user?.email || "Not provided"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">
                User ID
              </label>
              <p className="mt-2 font-mono text-sm text-slate-600">
                {user?.id || "Not available"}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-xs leading-5 text-slate-500">
                <strong>Note:</strong> This is a student project demo. Personal information is stored securely but should not be real sensitive data.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link to="/">
            <Button className="rounded-full bg-slate-950 px-6 py-3 text-sm hover:bg-slate-800">
              Back to Home
            </Button>
          </Link>
          <Link to="/explore">
            <Button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm text-slate-900 hover:bg-slate-100">
              Explore Crypto
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
