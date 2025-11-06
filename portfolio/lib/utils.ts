/**
 * Gets the base path for assets based on environment
 * This is needed for GitHub Pages deployment
 */
export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

/**
 * Resolves an asset path with the correct base path
 * @param path - The path to the asset (e.g., "/images/logo.jpg")
 * @returns The full path with basePath prepended if needed
 */
export const getAssetPath = (path: string) => {
  const basePath = getBasePath()

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return basePath ? `${basePath}${normalizedPath}` : normalizedPath
}

/**
 * Formats a date string to a readable format
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
