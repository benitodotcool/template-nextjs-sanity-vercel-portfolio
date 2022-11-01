import Link from 'next/link'
import Container from './container'
import clsx from 'clsx'

export default function Alert({ preview }) {
  return (
    <div className={clsx(
      'border-b',
      preview && 'text-white bg-black',
      !preview && 'bg-red-500'
    )}>
      <Container>
        <div className="py-2 text-center text-sm flex justify-center gap-1">
          {preview && (
            <>
              This page is a preview.{' '}
              <Link
                href="/api/exit-preview"
                className="underline transition-colors duration-100 hover:text-red-500"
              >
                Click here
              </Link>{' '}
              to exit preview mode.
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
