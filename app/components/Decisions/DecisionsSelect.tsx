export default function DecisionsSelect() {
  return (
    <form className="mx-auto max-w-sm">
      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        Select an option
      </label>
      <select
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  );
}
