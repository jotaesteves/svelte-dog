<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Login from "./Login.svelte";
    import PrivateRoute from "./PrivateRoute.svelte";
    import { user } from "../stores/user";

    function handleLogout() {
        $user = null;
    }
</script>

<div class="border rounded-sm border-gray-700">
    <Router>
        <header>
            <nav
                class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
            >
                <div
                    class="container flex flex-wrap justify-between items-center mx-auto"
                >
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            /></svg
                        >
                    </button>
                    <div
                        class="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                    >
                        <ul
                            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div class="grid place-items-center pb-4 pt-4">
            <Route path="login">
                <Login />
            </Route>

            <Route path="/">
                <h3>Home</h3>
                <p>Home sweet home...</p>
            </Route>

            <Route path="about">
                <h3>About</h3>
                <p>That's what it's all about!</p>
            </Route>

            <PrivateRoute path="profile" let:location>
                <h3>Welcome {$user.username}</h3>
                <button on:click={handleLogout}>Logout</button>
            </PrivateRoute>
        </div>
    </Router>
</div>
