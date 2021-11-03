import {Document, Title, Section, Ref} from '@wcrichto/nota';
import { Embed } from "@penrose/components";

export default () => <Document>
  <Title>Hello, World!</Title>
  <Section title="Introduction" name="sec:intro">
    <p>This is my document: <$>{String.raw`\underlinesegment{AB}`}</$></p>
    <p>This is a reference to <Ref name="sec:intro" /></p>
  </Section>
</Document>;